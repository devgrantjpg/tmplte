import { Router } from "express";
import stripe from "../lib/stripe.js";
const router = Router();
import cors from "cors";

router.use(cors());

router.post("/checkout", async (req, res) => {
  const reqBody = await req.body;
  const { item, email } = await reqBody;

  try {
    const extractingItems = await item.map((product) => ({
      quantity: product?.quantity,
      price_data: {
        currency: "usd",
        unit_amount: Math.round(product.price * 100),
        product_data: {
          name: product?.title,
          description: product?.description,
          images: [product?.image],
        },
      },
    }));
    const origin = process.env.ORIGIN;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: extractingItems,
      mode: "payment",
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cart`,
      customer_email: email,
    });
    return res.status(200).send({
      success: true,
      message: "Payment session created successfully",
      url: session?.url,
    });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).send({
      success: false,
      message: "Payment failed",
    });
  }
});

export default router;
