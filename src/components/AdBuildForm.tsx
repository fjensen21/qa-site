"use client";
import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";
import CampaignArray from "./CampaignArray";

type FormValues = {
  adName: string;
  websiteUrl: string;
  cta: string;
  campaigns: {
    campaignId: number;
    adSets: number[];
  }[];
  adsFile: File;
};
const AdBuildForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    getValues,
    setValue,
  } = useForm<FormValues>({
    defaultValues: {
      adName: "",
      cta: "",
      campaigns: [
        {
          campaignId: -1,
          adSets: [-1],
        },
      ],
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };
  return (
    <div className="card card-bordered bg-base-200 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-2xl text-primary">QA an Ad</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3 className="my-2 mt-5 text-lg">
            <b>Upload Ads</b>
          </h3>
          <input
            type="file"
            {...register("adsFile")}
            className="file-input w-full max-w-xs"
          />
          <h3 className="my-2 mt-5 text-lg">
            <b>Expected Values</b>
          </h3>
          <label className="input input-bordered my-2 flex items-center gap-2 focus-within:input-primary">
            <b>Ad Name</b>
            <input
              type="text"
              className="grow"
              placeholder="Ad1"
              {...register("adName", { required: true })}
            />
          </label>
          <label className="input input-bordered my-2 flex items-center gap-2 focus-within:input-primary">
            <b>Website URL</b>
            <input
              type="text"
              className="grow"
              placeholder="https://www.example.com"
              {...register("websiteUrl", { required: true })}
            />
          </label>
          <label className="input input-bordered my-2 flex items-center gap-2 focus-within:input-primary">
            <b>CTA</b>
            <input
              type="text"
              className="grow"
              placeholder="Buy Now"
              {...register("cta", { required: true })}
            />
          </label>

          <CampaignArray
            control={control}
            register={register}
            setValue={setValue}
            getValues={getValues}
          />

          <br />
          <input type="submit" className="btn btn-primary" />
        </form>
      </div>
    </div>
  );
};

export default AdBuildForm;
