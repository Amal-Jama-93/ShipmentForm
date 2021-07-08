import My, { MySelect } from "./SelectField";
import { withFormik, FormikProps, FormikErrors, Form, Field } from 'formik';

// Form interface
interface ShipmentFormInput {
    shipmentMode: string
    shipmentCode: number | string
    enableShipment: boolean | string
    description: string
    ShipmentGradePicked: string
}


interface ShipmentFormInputProps {
    initialShipmentMode?: string, 
    initialShipmentCode?: number | string
    initialEnableShipment?: boolean | string
    initialDescription?: string
    initialShipmentGradePicked?: string
}

// Initial values given to the form

const shipmentOptions = [
    {
        label: 'Truck',
        value: 'truck'
    },
    {
        label: 'Air',
        value: 'air'
    },
    {
        label: 'Ship',
        value: 'ship'
    },
    {
        label: 'train',
        value: 'train'
    }
]

const enableShipmentOptions  = [
    {
        label: 'No',
        value: false
    },
    {
        label: 'Yes',
        value: true
    },
    
]




interface OTHER_PROPS {
    message?: string
}



// Validation







const InnerForm = (props: OTHER_PROPS & FormikProps<ShipmentFormInput>) => {
    const {touched , errors , isSubmitting} = props;
    
    return (
        <Form>
            <fieldset>
            <legend>Shipment Type</legend>
            <h1>SHIPMENT FORM</h1>

            {/* Shipment Mode */}
            <div className="input">
                <label htmlFor="shipmentMode">Shipment Mode</label>
            <Field as="select" name="shipmentMode" options={shipmentOptions} component={MySelect} placeholder="Shipment Mode" isMulti={false} />
            {touched.shipmentMode && errors.shipmentMode && <div className="err">{errors.shipmentMode}</div>}</div>


            {/* Shipment code */}
            <div className="input">
            <label htmlFor="shipmentCode">Shipment Code</label>
            <Field type='text' name="shipmentCode" className="field"/>
            {touched.shipmentCode && errors.shipmentCode && <div className="err">{errors.shipmentCode}</div>}</div>

            {/* Shipment Grade */}
            <div className="input">
            <div id="grade-radio-group">Shipment Grade</div>
            <div role="group" aria-labelledby="my-radio-group" className="radio-group">
            <label className="grade">
              <Field type="radio" name="picked" value="A" className="radio"/>
              <span>A</span>
            </label>
            <label className="grade">
              <Field type="radio" name="picked" value="B" className="radio"/>
              <span>B</span>

            </label>
            <label className="grade">
              <Field type="radio" name="picked" value="C" className="radio"/>
              <span>C</span>
              
            </label>
            {/* {touched.ShipmentGradePicked && errors.ShipmentGradePicked && <div>{errors.ShipmentGradePicked}</div>} */}
          </div>
            </div>


            {/* Enable Shipment */}
            <div className="input">
            <label htmlFor="enableShipment">Enable Shipment</label>
            <Field as="select" name="enableShipment" options={enableShipmentOptions} component={MySelect} placeholder="Enable Shipment?" isMulti={false}/>
            {touched.enableShipment && errors.enableShipment && <div className="err">{errors.enableShipment}</div>}        
            </div>
               

            {/* Shipment Description*/}
            <div className="input">
            <label htmlFor="description">Description</label>
            <Field type='textarea' name="description" className="field textarea"/>
            {touched.description && errors.description && <div className="err">{errors.description}</div>}
          </div>

            <button type="submit" disabled={isSubmitting}>
                Create Shipment
            </button>


            </fieldset>

        </Form>

        
    )
};


const ShipmentForm = withFormik<ShipmentFormInputProps, ShipmentFormInput>({

    mapPropsToValues: props => {
        return {
            shipmentMode: props.initialShipmentMode || '',
            shipmentCode: props.initialShipmentCode || '',
            enableShipment: props.initialEnableShipment || '',
            description: props.initialDescription || "",
            ShipmentGradePicked: props.initialShipmentGradePicked || ""
        };
    },

    validate: (values: ShipmentFormInput) => {
        let errors: FormikErrors<ShipmentFormInput> = {};
        if(!values.shipmentMode) {errors.shipmentMode = 'Required Shipment Mode'}
        if(!values.shipmentCode) {errors.shipmentCode = 'Required Shipment Code'}
        // if(!values.ShipmentGradePicked) {errors.ShipmentGradePicked = 'Required 333'}
        // if(!values.enableShipment) {errors.enableShipment = 'Required 3'}
        if(!values.description) {errors.description = 'Required Description'}



        return errors;
    },
    
    handleSubmit: values => {

        alert(JSON.stringify(values, null ,2));
       
   
      },
    //   json.stringify(values null 2)


})(InnerForm)









// ShipForm Component
// const ShipmentForm = () => {
//   const formik = useFormik({
//     initialValues: INITIALVALUES,
//     onSubmit: values => {
//       alert(JSON.stringify(values, null, 2));
//     }
//   });
//   return (
//     <form onSubmit={formik.handleSubmit}>
//       <label htmlFor="email">Email Address</label>
//       <input
//         id="email"
//         name="email"
//         type="email"
//         onChange={formik.handleChange}
//         // value={formik.values.email}
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

export default ShipmentForm;