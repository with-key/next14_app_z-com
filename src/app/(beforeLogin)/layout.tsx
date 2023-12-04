type Props = {
  children: React.ReactNode;
  modal: React.ReactNode;
};

export default function BeforeLoginLayout({ children, modal }: Props) {
  return (
    <>
      <div>before login layout</div>
      <div>{modal}</div>
      <div>{children}</div>
    </>
  );
}
