export const MothlySummary = ({income , expense}) => {
  return (
    <div className=" pr-15 pl-4 py-5 rounded-2xl gap-4 grid grid-cols-2 items-center justify-between content-center text-center">
      <div className="bg-slate-100 border col-span-1 border-slate-200 rounded-2xl pr-15 pl-4 py-5">
        <div className=" flex justify-between flex-colitems-baseline">
          <div>
            <p>INCOME</p>
          </div>
          <div>
            <span>logo</span>
          </div>
        </div>
        <div className="flex items-start pt-1">
          <div>${income}</div>
        </div>
      </div>

      <div className="bg-slate-100 border col-span-1 border-slate-200 rounded-2xl pr-15 pl-4 py-5">
        <div className=" flex justify-between flex-colitems-baseline">
          <div>
            <p>EXPENSE</p>
          </div>
          <div>
            <span>logo</span>
          </div>
        </div>
        <div className="flex items-start pt-1">
          <div>${expense}</div>
        </div>
      </div>
    </div>
  );
};
