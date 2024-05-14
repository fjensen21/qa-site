import { useFieldArray } from "react-hook-form";

interface AdSetArrayProps {
  campaignIndex: number;
  control: any;
  register: any;
}

const AdSetArray: React.FC<AdSetArrayProps> = ({
  campaignIndex,
  control,
  register,
}) => {
  const { fields, remove, append } = useFieldArray({
    control,
    name: `campaigns.${campaignIndex}.adSets`,
  });
  return (
    <div className="ml-5">
      {fields.map((item, k) => (
        <div key={item.id} className="flex items-center gap-2">
          <input
            type="number"
            {...register(`campaigns.${campaignIndex}.adSets.${k}`)}
            className="input input-sm input-bordered my-1 [appearance:textfield] focus-within:input-primary [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          />
          <button
            className="btn btn-error btn-sm opacity-50"
            onClick={() => remove(k)}
          >
            X
          </button>
        </div>
      ))}
      <button
        className="btn btn-sm text-xs outline outline-white"
        onClick={() => append(-1)}
      >
        Add AdSet
      </button>
    </div>
  );
};

export default AdSetArray;
