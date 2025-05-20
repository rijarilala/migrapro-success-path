
import {
  Form,
  FormControl,
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
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const form = useForm();
  const { t } = useTranslation();

  const onSubmit = (data: any) => {
    console.log(data);
    // TODO: Handle form submission
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">{t('contact.sendMessage')}</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('contact.fullName')}</FormLabel>
                <FormControl>
                  <Input placeholder={t('contact.yourName')} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('contact.email')}</FormLabel>
                <FormControl>
                  <Input type="email" placeholder={t('contact.yourEmail')} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('contact.phone')}</FormLabel>
                <FormControl>
                  <Input placeholder="+261 34 05 350 68" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('contact.subject')}</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder={t('contact.selectSubject')} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value={t('subjects.orientation')}>
                      {t('subjects.orientation')}
                    </SelectItem>
                    <SelectItem value={t('subjects.packSuccess')}>
                      {t('subjects.packSuccess')}
                    </SelectItem>
                    <SelectItem value={t('subjects.immigration')}>
                      {t('subjects.immigration')}
                    </SelectItem>
                    <SelectItem value={t('subjects.recruitment')}>
                      {t('subjects.recruitment')}
                    </SelectItem>
                    <SelectItem value={t('subjects.other')}>
                      {t('subjects.other')}
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('contact.message')}</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder={t('contact.yourMessage')} 
                    className="min-h-[150px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            {t('contact.send')}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
