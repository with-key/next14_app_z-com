type Props = {
  children: React.ReactNode;
  modal: React.ReactNode;
  aside: React.ReactNode;
};

export default function BeforeLoginLayout({ children, modal, aside }: Props) {
  return (
    <>
      <div>{children}</div>
      <div>{aside}</div>
      {/* <div>{modal}</div> */}
    </>
  );
}
