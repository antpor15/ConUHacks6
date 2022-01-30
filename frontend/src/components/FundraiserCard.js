import { Card, Image, Text, Badge, Button, Group, useMantineTheme } from '@mantine/core';
import "../css/fundraiserCard.css"

export const FundraiserCard = (props) => {
    const theme = useMantineTheme();

    const secondaryColor = theme.colorScheme === 'dark'
        ? theme.colors.dark[1]
        : theme.colors.gray[7];

    return (
        <div id="card-div">
            <Card shadow="sm"
                sx={{
                    backgroundColor: "black",
                    opacity: 0.9,
                    margin: "5px",
                    border: "2px solid transparent",
                    '&:hover': {
                        border: "2px solid yellow",
                    },
                }}
            >
                <Card.Section>
                    <Image src={props.image} height={80} alt={props.image} />
                </Card.Section>

                <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                    <Text weight={500}>{props.name}</Text>
                    {/* <Badge color="pink" variant="light">
                        On Sale
                    </Badge> */}
                </Group>

                <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
                    {props.description}
                </Text>

                <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
                    Donate
                </Button>
            </Card>
        </div >
    );
}