import {  Request, Response } from "express";
import Stripe from "stripe";

const config = {
    apiVersion: '2020-08-27',
    locale: 'es',
    // otras opciones de configuración
  };

const stripe = new Stripe('sk_test_51NSt7LL6F2IdUTVBwoFlwxS01aVUxgc47eRXC0U1gQLLdqHjwjD1zT8RMZ3TqlrvqEZVfWh1H1PiYqG1wLEITMZ700yko5TFDF',
{
    apiVersion: '2022-11-15'
});

export const handleStripe = async (req:Request,res: Response) => {
      

    try{
     const {id,amount} = req.body;
       
     const payment = await stripe.paymentIntents.create({
          amount,
          currency: "PEN",
          payment_method: id,
          confirm:true,

      })
      console.log(payment);
       res.send({message: 'Successfull payment'})

    }catch(error){
        console.log(error);
        res.json({message:error})
    }
}

