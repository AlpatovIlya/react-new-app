type FieldType = {
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  id?: string;
  placeholder?: string;
  name?: string;
  type?: string;
  disabled?: boolean;
};

export default FieldType;
