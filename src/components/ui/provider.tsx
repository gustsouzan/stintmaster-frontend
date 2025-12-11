"use client"

import { ChakraProvider } from "@chakra-ui/react"
import { system } from "@/app/theme"
import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from "./color-mode"
import { SessionProvider } from "@/app/Session.context"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

export function Provider(props: ColorModeProviderProps) {
   const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
    <ChakraProvider value={system}>
      <SessionProvider>
        <ColorModeProvider {...props} />
      </SessionProvider>
    </ChakraProvider>
    </QueryClientProvider>
  )
}
