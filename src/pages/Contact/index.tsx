import { ContactPageContainer, SocialCard } from "./styles";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import { LinkedinLogo } from "phosphor-react";

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
      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input type="text" {...register("name")} />
        <label>Email</label>
        <input type="email" {...register("email")} />
        <label>Message</label>
        <textarea {...register("message")} />

        <input type="submit" />
      </form> */}
      <SocialCard style={{ backgroundColor: "#0a66c24d" }}>
        <Link to="https://github.com/dmeneres">
          <div>
            <LinkedinLogo color="#0a66c2" size={120} />
          </div>
        </Link>
        <Link to="https://github.com/dmeneres">dmeneres</Link>
      </SocialCard>
      <SocialCard style={{ backgroundColor: "#0a66c24d" }}>
        <Link to="https://www.linkedin.com/in/dmeneres/">
          <div>
            <LinkedinLogo color="#24292f" size={120} />
          </div>
        </Link>
        <Link to="https://www.linkedin.com/in/dmeneres/">in/dmeneres</Link>
      </SocialCard>
      <SocialCard style={{ backgroundColor: "#0a66c24d" }}>
        <Link to="/about">
          <div>
            <LinkedinLogo color="#0a66c2" size={120} />
          </div>
        </Link>
        <Link to="https://www.linkedin.com/in/dmeneres/">in/dmeneres</Link>
      </SocialCard>
    </ContactPageContainer>
  );
}
