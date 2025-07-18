"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { subjects } from "@/constants";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  username: z.string().min(1, {
    message: "Companion is required.",
  }),
  subject: z.string().min(1, {
    message: "Subject is required.",
  }),
  topic: z.string().min(1, {
    message: "Topic is required.",
  }),
  voice: z.string().min(1, {
    message: "Voice is required.",
  }),
  style: z.string().min(1, {
    message: "Style is required.",
  }),
  duration: z.number().min(1, {
    message: "Duration is required.",
  }),
});

type CompanionFormValues = z.infer<typeof formSchema>

const CompanionForm = () => {
  const form = useForm<CompanionFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      subject: "",
      topic: "",
      voice: "",
      style: "",
      duration: 15,
    },
  });

  const onSubmit = (values: CompanionFormValues) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
        
        {/* Username Field */}
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Companion Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter Companion Name"
                  {...field}
                  className="input"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        {/* Subject Field */}
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl></FormControl>
              <Select
                onValueChange={field.onChange}
                value={field.value}
                defaultValue={field.value}
              >
                <SelectTrigger className="input capitalize">
                  <SelectValue placeholder="Select Subject" />
                </SelectTrigger>
                <SelectContent>
                  {subjects.map((subject) => (
                    <SelectItem
                      value={subject}
                      key={subject}
                      className="capitalize"
                    >
                      {subject}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Topic Field */}
        <FormField
          control={form.control}
          name="topic"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What should the companion help with?</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Ex. Derivatives & Integrals"
                  {...field}
                  className="input"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        {/* Voice Field */}
        <FormField
          control={form.control}
          name="voice"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Voice</FormLabel>
              <FormControl></FormControl>
              <Select
                onValueChange={field.onChange}
                value={field.value}
                defaultValue={field.value}
              >
                <SelectTrigger className="input">
                  <SelectValue placeholder="Select The Voice" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male"  className="capitalize">
                    Male
                  </SelectItem>
                  <SelectItem value="female" className="capitalize">
                    Female
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Style Field */}
        <FormField
          control={form.control}
          name="style"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Style</FormLabel>
              <FormControl></FormControl>
              <Select
                onValueChange={field.onChange}
                value={field.value}
                defaultValue={field.value}
              >
                <SelectTrigger className="input">
                  <SelectValue placeholder="Select The Style" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="formal"  className="capitalize">
                    Formal
                  </SelectItem>
                  <SelectItem value="casual" className="capitalize">
                    Casual
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Duration Field */}
        <FormField
          control={form.control}
          name="duration"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Estimated Session Duration in Minutes</FormLabel>
              <FormControl>
                <Input
                  placeholder="15"
                  type="number"
                  {...field}
                  className="input"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="mb-12 w-full cursor-pointer">+ Build Your Companion</Button>
      </form>
    </Form>
  );
};

export default CompanionForm;