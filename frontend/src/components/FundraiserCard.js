import { Card, Image, Text, Badge, Button, Group, useMantineTheme } from '@mantine/core';
import "../css/fundraiserCard.css"

export const FundraiserCard = (props) => {
    const theme = useMantineTheme();

    const secondaryColor = theme.colorScheme === 'dark'
        ? theme.colors.dark[1]
        : theme.colors.gray[7];

    return (
        <div id="card-div" style={{ opacity: 0.8 }}>
            <Card shadow="sm"
                sx={{
                    backgroundColor: "black",
                    margin: "5px",
                    border: "2px solid transparent",
                    '&:hover': {
                        border: "2px solid yellow",
                    },
                }}
            >
                <Card.Section>
                    <Image src={props.image} height={90} alt={props.image} />
                </Card.Section>
                <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                    <Text size="lg" weight={500} style={{ fontFormat: "Nanum Gothic sans-serif", color: "white" }}>{props.name}</Text>
                    {/* <Badge color="pink" variant="light">
                        On Sale
                    </Badge> */}
                </Group>

                <Text size="sm" style={{ color: "white", lineHeight: 1.5, fontFormat: "Nanum Gothic sans-serif", color: "white" }}>
                    {props.description}
                </Text>

                <Button variant="light" color="blue" fullWidth style={{ marginTop: 14, fontFormat: "Nanum Gothic sans-serif", color: "black", backgroundColor: "#FFE81F" }}>
                    Donate
                </Button>
            </Card>
        </div >
    );
}