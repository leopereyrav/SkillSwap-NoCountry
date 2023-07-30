import { Schema, model } from 'mongoose';
import { ICountry } from '../interfaces/countries.interface';

const countrySchema = new Schema<ICountry>({
  country: {
    type: String,
    required: true,
  },
});

countrySchema.set('toJSON', {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Country = model<ICountry>('Country', countrySchema);

export default Country;
