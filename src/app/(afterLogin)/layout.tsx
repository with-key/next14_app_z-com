type Props = {
  children: React.ReactNode;
};

export default function AfterLoginLayout({ children }: Props) {
  return (
    <div>
      <div>after login layout</div>
      <div>{children}</div>
    </div>
  );
}
