import { ContactPageContainer } from "./styles";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  name: string;
  email: string;
  message: string;
}

export function ContactPage() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <ContactPageContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input type="text" {...register("name")} />
        <label>Email</label>
        <input type="email" {...register("email")} />
        <label>Message</label>
        <textarea {...register("message")} />

        <input type="submit" />
      </form>
    </ContactPageContainer>
  );
}
