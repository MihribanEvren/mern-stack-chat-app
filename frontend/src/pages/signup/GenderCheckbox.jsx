function GenderCheckbox() {
  return (
    <div className="flex ">
      <div className="form-control ">
        <label className="gap-2 cursor-pointer label ">
          <span className="text-pink-100 label-text">Female</span>
          <input
            type="checkbox"
            className="border-pink-200 checkbox checkbox-secondary"
          />
        </label>
      </div>
      <div className="form-control">
        <label className="gap-2 cursor-pointer label">
          <span className="text-pink-100 label-text">Male</span>
          <input
            type="checkbox"
            className="border-pink-200 checkbox checkbox-secondary"
          />
        </label>
      </div>
    </div>
  );
}

export default GenderCheckbox;
