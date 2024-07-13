import { Box, FormControlLabel, Radio, RadioGroup } from '@mui/material'
import React from 'react'
import Errortext from './Errortext'
import Text from './Text'

function RadioButton(props) {
    return (
        <Box>
            <Text style={{ fontWeight: 500 }}>{props.label}</Text>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name={props.name}
                id={props.id}
                onChange={props.onChange}
                value={props.value}
                onBlur={props.onBlur}
            >
                {props?.options?.map((item, index) => {
                    return (
                        <FormControlLabel key={index} value={item.id} control={<Radio />} label={item.name} />
                    )
                }
                )}
            </RadioGroup>
            {props.errors && props.touched ? <Errortext error={props.errors} /> : null}

        </Box>
    )
}

export default RadioButton