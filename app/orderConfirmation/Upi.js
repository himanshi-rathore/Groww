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
  name: z.string().min(4, {
    message: 'Username must be at least 4 characters.',
  }),
});

const Upi = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
    },
  });

  const isUpiValid = useCartStore((state) => state.isUpiValid);
  const setValidUpi = useCartStore((state) => state.setValidUpi);

  const handleBlur = (field) => {
    form.trigger(field);
    setValidUpi(form.formState.isValid);
  };

  const getLinkHref = () => {
    // Return a random link based on some condition
    return isUpiValid ? (Math.random() > 0.5 ? '/success' : '/failed') : '/pending';
  };

  return (
    <div className="p-5 my-10 bg-white border border-gray-300 rounded-xl shadow-md hover:shadow-lg max-w-md mx-auto">
      <Image src="/UPI.png" width={100} height={100} className="mb-8 mx-auto my-auto" />
      <Form {...form}>
        <form>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Enter UPI ID"
                    {...field}
                    className="input-field m-2"
                  />
                </FormControl>
                <FormMessage className="error-message">{form.formState.errors.name?.message}</FormMessage>
              </FormItem>
            )}
          />
        </form>
      </Form>
      <Link href={getLinkHref()}>
        <button
          type="button"
          onClick={() => handleBlur('name')}
          // onInput={() => handleBlur('name')}
          disabled={!form.formState.isDirty || !form.formState.isValid }
          className={`w-full md:w-1/2 py-2 mt-3 rounded-full ${isUpiValid ? 'bg-indigo-500' : 'bg-gray-300 cursor-not-allowed'} text-white text-sm font-sm mb-3 flex items-center gap-2 justify-center 
              hover:bg-black/[0.5] shadow-md hover:shadow-lg`}
        >
          Make Payment
        </button>
      </Link>
    </div>
  );
};

export default Upi;
