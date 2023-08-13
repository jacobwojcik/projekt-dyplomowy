'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/Form';

import { Button } from './ui/Button';
import { Input } from './ui/Input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/Select';
import { Category } from '@/types';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Nazwa produktu musi zawierać conajmniej 2 znaki',
  }),
  price: z
    .string()
    .transform((val) => {
      const num = Number(val);
      if (isNaN(num)) throw new Error('Invalid number');
      return num;
    })
    .refine((value) => value <= 999_999, {
      message: 'Maksymalna cena to: 999 999',
    })
    .refine((value) => value > 0, {
      message: 'Cena musi być większa od zera',
    }),
  quantity: z
    .string()
    .transform((val) => {
      const num = Number(val);
      if (isNaN(num)) throw new Error('Invalid number');
      return num;
    })
    .refine((value) => value <= 1000, {
      message: 'Maksymalna ilość produktów: 1000',
    })
    .refine((value) => value >= 0, {
      message: 'Ilość musi być liczbą nieujemną',
    }),

  category: z.number(),
});

interface Props {
  options: Category[];
}

const AddProductForm = ({ options }: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      price: 0,
      quantity: 0,
      category: 0,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };
  return (
    <div className="border p-4 rounded-lg w-[360px]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nazwa produktu</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cena</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="quantity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ilość produktów</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="category"
            render={({ field }) => (
              <>
                <FormItem>
                  <FormLabel>Kategoria</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={(value) => {
                        form.setValue('category', +value);
                        field.onChange(value);
                      }}
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Kategoria" />
                      </SelectTrigger>
                      <SelectContent>
                        {options.map(({ id, name }) => (
                          <SelectItem value={`${id}`} key={name + id}>
                            {name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
                <input {...field} type="hidden" />
              </>
            )}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default AddProductForm;
