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
    <div style={{ marginLeft: 20 }}>
      {fields.map((item, k) => (
        <div key={item.id}>
          <input
            {...register(`campaigns.${campaignIndex}.adSets.${k}`)}
            className="input input-sm input-bordered"
          />
          <button className="btn btn-error btn-sm" onClick={() => remove(k)}>
            X
          </button>
        </div>
      ))}
      <button className="btn btn-sm" onClick={() => append(-1)}>
        Add AdSet
      </button>
    </div>
  );
};

export default AdSetArray;
