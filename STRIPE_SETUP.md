
# Stripe Integration Setup Guide

## Overview
This document provides step-by-step instructions for integrating Stripe payments into your Sky Blue Heart Stories nonprofit website.

## Prerequisites
- Stripe account (create at https://stripe.com)
- Supabase project set up
- Basic understanding of React and TypeScript

## Setup Steps

### 1. Create Stripe Account
1. Go to https://stripe.com and create an account
2. Complete the account verification process
3. Navigate to the Dashboard

### 2. Get Your Stripe Keys
1. In your Stripe Dashboard, go to "Developers" → "API keys"
2. Copy your **Publishable key** (starts with `pk_`)
3. Copy your **Secret key** (starts with `sk_`)

⚠️ **Important**: Never expose your secret key in client-side code!

### 3. Set Up Environment Variables
Since this is a frontend-only app, you'll need to use Supabase Edge Functions for secure server-side Stripe operations.

Create a Supabase Edge Function:
```bash
supabase functions new create-checkout-session
```

### 4. Edge Function Code
Create the following edge function in `supabase/functions/create-checkout-session/index.ts`:

```typescript
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import Stripe from 'https://esm.sh/stripe@14.21.0'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Initialize Stripe with your secret key
    const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') || '', {
      apiVersion: '2023-10-16',
    })

    const { amount, currency = 'usd' } = await req.json()

    // Create Checkout Sessions from body params
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency,
            product_data: {
              name: 'Donation to Sky Blue Heart Stories',
              description: 'Help us make a difference in our community',
            },
            unit_amount: amount * 100, // Convert to cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${req.headers.get('origin')}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get('origin')}/`,
    })

    return new Response(
      JSON.stringify({ sessionId: session.id, url: session.url }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    )
  }
})
```

### 5. Set Environment Variables in Supabase
In your Supabase project dashboard:
1. Go to "Edge Functions" → "Settings"
2. Add your Stripe secret key:
   - Key: `STRIPE_SECRET_KEY`
   - Value: Your Stripe secret key (starts with `sk_`)

### 6. Deploy Edge Function
```bash
supabase functions deploy create-checkout-session
```

### 7. Update Frontend Code
Replace the current donation handling in `DonateSection.tsx`:

```typescript
const handleDonate = async (amount: number) => {
  try {
    const { data, error } = await supabase.functions.invoke('create-checkout-session', {
      body: { amount }
    });

    if (error) throw error;

    // Redirect to Stripe Checkout
    if (data.url) {
      window.open(data.url, '_blank');
    }
  } catch (error) {
    console.error('Error creating checkout session:', error);
    alert('Something went wrong. Please try again.');
  }
};
```

### 8. Create Success Page
Create a success page component to handle post-payment redirect:

```typescript
// src/pages/Success.tsx
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Success = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-white">
      <div className="container text-center">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8">
          <div className="text-6xl mb-6">🎉</div>
          <h1 className="bubble-text-md gradient-text mb-4">Thank You!</h1>
          <p className="text-gray-600 mb-6">
            Your generous donation helps us continue our mission of creating positive change in our community.
          </p>
          <button 
            onClick={() => window.location.href = '/'}
            className="btn-primary"
          >
            Return Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;
```

### 9. Add Route for Success Page
In your `App.tsx`, add the success route:

```typescript
<Route path="/success" element={<Success />} />
```

## Testing
1. Use Stripe's test mode during development
2. Test card numbers:
   - Success: 4242 4242 4242 4242
   - Declined: 4000 0000 0000 0002

## Security Best Practices
1. Never expose secret keys in client-side code
2. Always validate payments server-side
3. Use HTTPS in production
4. Implement proper error handling
5. Consider implementing webhooks for production

## Production Deployment
1. Switch to live mode in Stripe Dashboard
2. Update environment variables with live keys
3. Ensure your domain is properly configured
4. Test thoroughly before going live

## Support
- Stripe Documentation: https://stripe.com/docs
- Supabase Edge Functions: https://supabase.com/docs/guides/functions
- For issues, check the Stripe Dashboard logs and Supabase function logs

## Cost Considerations
- Stripe charges 2.9% + 30¢ per successful transaction in the US
- No monthly fees for standard accounts
- Consider Stripe's nonprofit rates if eligible
