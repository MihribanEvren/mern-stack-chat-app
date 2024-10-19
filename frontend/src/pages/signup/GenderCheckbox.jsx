function GenderCheckbox({ onCheckboxChange, selectedGender }) {
  return (
    <div className="flex ">
      <div className="form-control ">
        <label
          className={`gap-2 cursor-pointer label ${
            selectedGender === 'female' ? 'selected' : ''
          } `}
        >
          <span className="text-pink-100 label-text">Female</span>
          <input
            type="checkbox"
            className="border-pink-200 checkbox checkbox-secondary"
            checked={selectedGender === 'female'}
            onChange={() => onCheckboxChange('female')}
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`gap-2 cursor-pointer label ${
            selectedGender === 'male' ? 'selected' : ''
          } `}
        >
          <span className="text-pink-100 label-text">Male</span>
          <input
            type="checkbox"
            className="border-pink-200 checkbox "
            checked={selectedGender === 'male'}
            onChange={() => onCheckboxChange('male')}
          />
        </label>
      </div>
    </div>
  );
}

export default GenderCheckbox;
