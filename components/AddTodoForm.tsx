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
import { addTodo } from '@/lib/queries/addTodo';
import { TodoCategoryEnum } from '@/types';

import { Button } from './ui/Button';
import { DatePicker } from './ui/DatePicker';
import { Input } from './ui/Input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/Select';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Nazwa produktu musi zawierać conajmniej 2 znaki',
  }),
  category: z.nativeEnum(TodoCategoryEnum, {
    required_error: 'Pole jest wymagane',
  }),
  dueDate: z.date({
    required_error: 'Pole jest wymagane',
  }),
  isDone: z.boolean(),
});

const todoCategoriesArray = Object.values(TodoCategoryEnum);

const AddProductForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      category: undefined,
      dueDate: undefined,
      isDone: false,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);

    const res = await addTodo({
      ...values,
      dueDate: values.dueDate.toDateString(),
    });

    console.log(res);
  };
  return (
    <div className="w-full p-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nazwa zadania</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dueDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Do kiedy?</FormLabel>
                <DatePicker
                  className="w-full"
                  selectedDate={field.value}
                  onDateChange={(date) => {
                    form.setValue('dueDate', date);
                    field.onChange(date);
                  }}
                />
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
                      onValueChange={(value: TodoCategoryEnum) => {
                        form.setValue('category', value);
                        field.onChange(value);
                      }}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Wybierz kategorię" />
                      </SelectTrigger>
                      <SelectContent>
                        {todoCategoriesArray.map((category) => (
                          <SelectItem value={category} key={category}>
                            {category}
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

          <Button type="submit">Zapisz</Button>
        </form>
      </Form>
    </div>
  );
};

export default AddProductForm;
