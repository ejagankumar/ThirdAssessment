import React from "react";
import SimpleCard from "../components/SimpleCard";
import TextField from "../components/TextField";
import Button from "../components/Button";
import Dropdown from "../components/Dropdown";
import RadioGroup from "../components/RadioGroup";
import Header from "../components/Header";
const handle = (e) => {
  console.log("Clicked", e);
}
const Flexi = ({config={}}) => {
  const {items=[]}=config;
  return (
    <div >
      {
        items.map((item)=>{
          let child=<Flexi config={item.children}></Flexi>
          switch(item.type){
            case 'Card':
              return <SimpleCard label={item.props.label}  > {child}</SimpleCard>
              case 'TexField':
                return   <TextField label={item.props.label} value={'default'} handleChange={handle} name={'text '}></TextField>
              case 'Header':
                return  <Header label={item.props.label}></Header>
              case 'Button':
                return       <Button label={item.props.label} handleClick={handle}></Button>
              case 'Dropdown':
                return   <Dropdown label={item.props.label} value={'default'} handleChange={handle} name={'text '} options={[1, 2, 3]}></Dropdown>
                case 'RadioGruop':
                  return <RadioGroup label={item.props.label} value={'default'} handleChange={handle} name={'text '} options={item.props.options}></RadioGroup>
            }
          // <Flexi config={}></Flexi>
        })
      }
      {/* <SimpleCard child={ <Button label={'props'} handleClick={handle}></Button>}> <Button label={'childern'} handleClick={handle}></Button></SimpleCard>
      <TextField label={'textfield'} value={'default'} handleChange={handle} name={'text '}></TextField>
      <Button label={'button'} handleClick={handle}></Button>
      <Dropdown label={'textfield'} value={'default'} handleChange={handle} name={'text '} options={[1, 2, 3]}></Dropdown>
      <RadioGroup label={'textfield'} value={'default'} handleChange={handle} name={'text '} options={[1, 2, 3]}></RadioGroup>
      <Header label={"header"}></Header> */}
    </div>
  );
};

export default Flexi;
