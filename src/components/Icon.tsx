type IconProps = {
  name?: 'arrow-up-right' | 'arrow-down' | 'arrow-up' | 'copy' | 'check' | 'spark';
};

export default function Icon({ name = 'arrow-up-right' }: IconProps) {
  const paths = {
    'arrow-up-right': 'M7 17 17 7M7 7h10v10',
    'arrow-down': 'M12 4v16m-6-6 6 6 6-6',
    'arrow-up': 'M12 20V4m-6 6 6-6 6 6',
    copy: 'M9 9h11v11H9zM15 9V4H4v11h5',
    check: 'm5 12 4 4L19 6',
    spark: 'M12 1v22M1 12h22M4.2 4.2l15.6 15.6m0-15.6L4.2 19.8',
  };

  return (
    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  );
}
