import React from 'react';
import { motion } from 'framer-motion';
import { Container, Box } from '@material-ui/core';

// export const Loader = () => {
//     <motion.div animate={{ rotate: 360 }} transition={{ duration: 2 }} />;
// };

export default class Loader extends React.Component {
    render() {
        return (
            <Container>
                <Box my={2}>
                    {[...new Array(12)]
                        .map(
                            () => `Cras mattis consectetur purus sit amet fermentum.
        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                        )
                        .join('\n')}
                </Box>
            </Container>

            // <motion.div animate={{ rotate: 360 }} transition={{ duration: 2 }} />
        );
    }
}
