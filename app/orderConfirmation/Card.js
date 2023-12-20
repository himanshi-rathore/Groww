import React from 'react';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import Link from 'next/link';
import useCartStore from '../cartStore';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  num: z
    .string()
    .refine(
      (value) => /^\d{16}$/.test(value),
      'Invalid card number. Please enter a valid 16-digit card number.'
    ),
  cvv: z
    .string()
    .refine(
      (value) => /^\d{3}$/.test(value),
      'Invalid CVV number. Please enter a valid 3-digit card number.'
    ),
  date: z
  .string()
    .refine((value) => !isNaN(new Date(value))),
});

const Card = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      num: '',
      date: new Date(),
      cvv: '',
    },
  });

  const isCardValid = useCartStore((state) => state.isCardValid);
  const setValidCard = useCartStore((state) => state.setValidCard);

  const handleBlur = (field) => {
    form.trigger(field);
    setValidCard(form.formState.isValid);
  };

  const getLinkHref = () => {
    // Return a random link based on some condition
    return isCardValid ? (Math.random() > 0.5 ? '/success' : '/failed') : '/pending';
  };

  return (
    <div className="p-5 my-5  bg-white border border-gray-300 rounded-xl shadow-md hover:shadow-lg max-w-md mx-auto">
      <Image src="/cardImage.png" width={100} height={10} className='ml-15' />
      <Form {...form}>
        <form>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Cardholder Name"
                    {...field}
                    onBlur={() => handleBlur('name')}
                    className="input-field m-2"
                  />
                </FormControl>
                <FormMessage className="error-message">{form.formState.errors.name?.message}</FormMessage>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="num"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Card Number"
                    {...field}
                    onBlur={() => {
                      handleBlur('num');
                      if (/^\d{16}$/.test(form.getValues('num'))) {
                        form.clearErrors('num');
                      }
                    }}
                    className="input-field m-2"
                  />
                </FormControl>
                <FormMessage className="error-message">{form.formState.errors.num?.message}</FormMessage>
              </FormItem>
            )}
          />

          <div className="flex flex-col md:flex-row md:justify-between">
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="date"
                      placeholder="Expiration Date"
                      {...field}
                      onBlur={() => handleBlur('date')}
                      className="input-field m-2"
                    />
                  </FormControl>
                  <FormMessage className="error-message">{form.formState.errors.date?.message}</FormMessage>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="cvv"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="CVV"
                      {...field}
                      onBlur={() => handleBlur('cvv')}
                      className="input-field m-2 md:ml-5 w-1/2"
                    />
                  </FormControl>
                  <FormMessage className="error-message">{form.formState.errors.cvv?.message}</FormMessage>
                </FormItem>
              )}
            />
          </div>
        </form>
      </Form>
      <Link href={getLinkHref()}>
        <button
          type="button"
          onClick={() => handleBlur('name')}
          onBlur={() => handleBlur('name')}
          disabled={!form.formState.isDirty || !form.formState.isValid}
          className={`w-full md:w-1/2 py-2 mt-3 rounded-full ${isCardValid ? 'bg-indigo-500' : 'bg-gray-300 cursor-not-allowed'} text-white text-sm font-sm mb-3 flex items-center gap-2 justify-center 
              hover:bg-black/[0.5] shadow-md hover:shadow-lg`}
        >
          Make Payment
        </button>
      </Link>
    </div>
  );
};

export default Card;
