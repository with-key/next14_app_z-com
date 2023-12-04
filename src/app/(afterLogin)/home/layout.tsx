type Props = {
  children: React.ReactNode;
};

export default function HomeLayout({ children }: Props) {
  return (
    <div>
      <div>home layout</div>
      <div>{children}</div>
    </div>
  );
}
