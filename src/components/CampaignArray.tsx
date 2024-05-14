import {
  Control,
  FieldValues,
  UseFormRegister,
  useFieldArray,
} from "react-hook-form";
import AdSetArray from "./AdSetArray";

interface CampaignArrayProps {
  control: any;
  register: any;
  setValue: any;
  getValues: any;
}

const CampaignArray: React.FC<CampaignArrayProps> = ({
  control,
  register,
  setValue,
  getValues,
}) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "campaigns",
  });
  return (
    <div className="my-5">
      <div
        className="tooltip tooltip-bottom mb-2"
        data-tip="The campaigns and ad sets where ads are expected to be."
      >
        <h3 className="text-lg">
          <b>Campaign/Ad Set IDs</b>
        </h3>
      </div>
      <ul>
        {fields.map((item, index) => (
          <li key={item.id} className="my-4">
            <div className="flex gap-2">
              <input
                type="number"
                {...register(`campaigns.${index}.campaignId`)}
                className="input input-sm input-bordered [appearance:textfield] focus-within:input-primary [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              />
              <button
                className="btn btn-error btn-sm opacity-50"
                onClick={() => remove(index)}
              >
                X
              </button>
            </div>
            <AdSetArray
              control={control}
              register={register}
              campaignIndex={index}
            />
          </li>
        ))}
      </ul>
      <button
        className="btn btn-secondary btn-sm"
        onClick={() => append({ campaignId: -1, adSets: [-1] })}
      >
        Add Campaign
      </button>
    </div>
  );
};

export default CampaignArray;
