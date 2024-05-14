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
    watch,
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

  const { fields, append, remove } = useFieldArray({
    control,
    name: "campaigns",
  });
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Upload Ads</h3>
        <input
          type="file"
          {...register("adsFile")}
          className="file-input w-full max-w-xs"
        />
        <h3>Expected Values</h3>
        <label className="input input-bordered flex items-center gap-2">
          <b>Ad Name</b>
          <input
            type="text"
            className="grow"
            placeholder="Ad1"
            {...register("adName", { required: true })}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <b>Website URL</b>
          <input
            type="text"
            className="grow"
            placeholder="https://www.example.com"
            {...register("websiteUrl", { required: true })}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
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
  );
};

export default AdBuildForm;
