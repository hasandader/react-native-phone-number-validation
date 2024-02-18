import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  PhoneInput(
    style?: object,
    inputStyle?: object,
    textStyle?: object
  ): JSX.Element;
}

export default TurboModuleRegistry.getEnforcing<Spec>('PhoneNumberValidation');
