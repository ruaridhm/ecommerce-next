interface ToggleInterface {
  name: string;
  checked: boolean;
  onChange: any;
  onValue: string | JSX.Element;
  offValue: string | JSX.Element;
  icon?: boolean;
}

const ToggleSwitch = ({
  name,
  checked,
  onChange,
  onValue = 'On',
  offValue = 'Off',
  icon,
}: ToggleInterface) => {
  return (
    <div className='relative w-20 inline-block align-middle	select-none text-left	'>
      <input
      className="hidden"
        type='checkbox'
        name={name}
        id={name}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <label htmlFor={name} >
        {icon ? (
          <>
           
            {checked ? (
              <span>{onValue}</span>
            ) : (
              <span>{offValue}</span>
            )}
          </>
        ) : (
          <>
            <span data-on={onValue} data-off={offValue} />
          
          </>
        )}
      </label>
    </div>
  );
};

export default ToggleSwitch;
