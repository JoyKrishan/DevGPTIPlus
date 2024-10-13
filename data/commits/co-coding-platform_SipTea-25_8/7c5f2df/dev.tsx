import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  text: z.string()
});

type FormFields = z.infer<typeof schema>;

const EditDescript = () => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm<FormFields>({
    resolver: zodResolver(schema)
  });

  const [isEditMode, setIsEditMode] = useState(false);
  const [text, setText] = useState("Initial Text");

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  const onSubmit: SubmitHandler<FormFields> = (data) =>{
    setText(data.text);
    setIsEditMode(false);
  }

  return (
    <div>
      {isEditMode ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("text")}
            defaultValue={text}
          />
          {errors.text && <p>{errors.text.message}</p>}
          <button type="submit">Save</button>
          <button type="button" onClick={toggleEditMode}>Cancel</button>
        </form>
      ) : (
        <div>
          <p>{text}</p>
          <button type="button" onClick={toggleEditMode}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default EditDescript;