import { Stack } from "@chakra-ui/react";
import Image from "next/image";

export default function FullScreenBanner({ bannerItems }) {
    return (
        <Stack borderBottom='15px solid #C58A22'>
            <Stack height='300px'>
                <Image
                    src={bannerItems[0][0].image.src}
                    alt={bannerItems[0][0].image.alt}
                    height={1}
                    width={1}
                    layout='responsive'
                    objectFit='cover'
                />
            </Stack>
        </Stack>
    )
}