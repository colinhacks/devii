import { Box, Text } from "@chakra-ui/react";
import React from "react"
import { Award } from "react-feather";
import { ParcourInformation } from "./ParcoursInformation";

export const BlockMain: React.FC = () => {
    return (
        <Box as='div'>
            <Text fontWeight='500'>
                J'aime les defis proposer par mes employeurs. Optimiste et rigoureux, j'adore apprendre des nouvelles choses afin de renforcer mes competences que j'ai deja acquis
            </Text>
            <Box>
                <Text as='h2' fontSize='3xl' fontWeight='700'>
                    Mes parcours
                </Text>
                <ParcourInformation year='2022' content={[{ header: "MasterI à l'ISPM", description: `Etude supérieur en 4ème année à l'ISPM`, iconFinal: <span>&#129333;</span> }]} ></ParcourInformation>

                <ParcourInformation year='2021'
                    content={[{ header: "MasterI à l'ISPM", description: `Etude supérieur en 4ème année à l'ISPM`, iconFinal: <span>&#129333;</span> },
                    { header: "Soutenance 3ème année en Informatique et Telecommuniaction", description: `Présentation de ma soutenance "Transfert de messagerie et de fichier en temps réel"`, iconFinal: <Award display="inline" /> },
                    { header: "Stage au sein de la société Esokia Madagascar", description: "Stage professionelle au sein de la société Esokia en tant que stagiaire Back-end (Symfony/Magento2)" }]} />
                <ParcourInformation year='2020' content={[{ header: "Fin d'etude universitaire en 3ème année", description: "Fin du parcous en L3 (licence) pour le parcours Informatique et Télécommunication à l'ISPM" }]} />
            </Box>
        </Box >
    );
}