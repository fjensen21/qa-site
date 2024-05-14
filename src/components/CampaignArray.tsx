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
    <>
      <ul>
        {fields.map((item, index) => (
          <li key={item.id}>
            <div>
              <input
                {...register(`campaigns.${index}.campaignId`)}
                className="input input-bordered"
              />
              <button className="btn btn-error" onClick={() => remove(index)}>
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
    </>
  );
};

export default CampaignArray;
