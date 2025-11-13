"use client";

import { Header } from '@/components/Header/Header';
import { Sidebar } from '@/components/SideBar/SideBar';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, Flex, IconButton, Text, useDisclosure } from '@chakra-ui/react';

const SIDEBAR_WIDTH = "250px";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { open, onToggle } = useDisclosure(); 
  
  
  const isDesktop = true; 

  return (

    <Flex h="100vh" maxW="1536px" margin="0 auto" overflow="hidden" direction="column">

    
      <Header> 
        <IconButton
            aria-label="Toggle Sidebar"
            onClick={onToggle}
            display={{ base: 'flex', md: 'none' }}
            size="sm"
          >
            <HamburgerIcon />
          </IconButton>
        </Header>

    
      <Flex flex="1" overflow="hidden">

        <Box 
          as="aside"
          w={SIDEBAR_WIDTH}
          bg="gray.900" 
          position={{ base: 'absolute', md: 'relative' }}
          display={{ base: open ? 'block' : 'none', md: 'none' }}
          h="100%"
          transition="all 0.3s ease"
          flexShrink={0}
          zIndex={10}
        >
          <Sidebar /> 
        </Box>
        
        <Box as="main" flex="1" p={6} overflowY="auto" bg="gray.900">

          {children} 
        </Box>

        
      </Flex>
      <Box as="footer" p={4} bg="gray.800">
          <Text textAlign="center" color="gray.400">
            © 2025 Stintmaster. All rights reserved.
          </Text>
        </Box>
    </Flex>
  );
}