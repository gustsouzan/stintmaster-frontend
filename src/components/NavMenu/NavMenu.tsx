import { Button, Icon, Menu, Portal } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { GiFullMotorcycleHelmet } from "react-icons/gi";
import { MdEmojiEvents } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { TbReportSearch } from "react-icons/tb";

type MenuOptions = {
  menu: string;
  href?: string;
  icon?: React.ReactNode;
  submenu?: MenuOptions[];
};

const menuOptions: MenuOptions[] = [
  {
    menu: "Dashboard",
    icon: <RxDashboard />,
    submenu: [
      { menu: "Eventos", href: "/home/dashboard/event", icon: <MdEmojiEvents /> },
      { menu: "Pilotos", href: "/home/dashboard/pilot", icon: <GiFullMotorcycleHelmet /> },
      {
        menu: "Relatórios", icon: <TbReportSearch />
      },
    ],
  },
  {
    menu: "Cadastros",
    submenu: [
      { menu: "Novo Cadastro de Evento", href: "/home/register/event" },
      { menu: "Novo Cadastro de Piloto", href: "/home/register/pilot" },
    ],
  },
];

export const NavMenu = () => {

  const router = useRouter();

  return (
    <div>
      {menuOptions.map((option) => (
        <Menu.Root key={option.menu} positioning={{ placement: "bottom"}}>
          <Menu.Trigger asChild >
            <Button variant={"ghost"} onClick={() => { option.href && router.push(option.href) }}>
              <span>{option.icon && <Icon color="accent">{option.icon}</Icon>}</span>{option.menu}
            </Button>
          </Menu.Trigger>
          <Portal>
            <Menu.Positioner>
              <Menu.Content>
                {option.submenu?.map((subOption) => (
                  <Menu.Item key={subOption.menu} value={subOption.menu} onClick={() => { subOption.href && router.push(subOption.href) }}>
                    {subOption.icon && <Icon color="accent">{subOption.icon}</Icon>}{subOption.menu}
                  </Menu.Item>
                ))}
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>
      ))}
    </div>
  );
}
