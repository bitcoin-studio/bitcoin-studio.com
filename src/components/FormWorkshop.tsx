import * as React from 'react'

import {FormGroup, H5, InputGroup, Intent, Switch} from '@blueprintjs/core'
import {Example, handleBooleanChange, handleStringChange, IExampleProps} from '@blueprintjs/docs-theme'
import { IntentSelect } from "./intentSelect";

export interface IFormWorkshopState {
  disabled: boolean;
  helperText: boolean;
  inline: boolean;
  intent: Intent;
  requiredLabel: boolean;
}

export class FormWorkshop extends React.PureComponent<IExampleProps, IFormWorkshopState> {
  public state: IFormWorkshopState = {
    disabled: false,
    helperText: false,
    inline: false,
    intent: Intent.NONE,
    requiredLabel: true,
  }

  private handleDisabledChange = handleBooleanChange(disabled => this.setState({disabled}))
  private handleHelperTextChange = handleBooleanChange(helperText => this.setState({helperText}))
  private handleInlineChange = handleBooleanChange(inline => this.setState({inline}))
  private handleRequiredLabelChange = handleBooleanChange(requiredLabel => this.setState({requiredLabel}))
  private handleIntentChange = handleStringChange((intent: Intent) => this.setState({intent}))

  public render() {
    const {disabled, helperText, inline, intent, requiredLabel} = this.state

    const options = (
      <>
        <H5>Props</H5>
        <Switch label="Disabled" checked={disabled} onChange={this.handleDisabledChange}/>
        <Switch label="Inline" checked={inline} onChange={this.handleInlineChange}/>
        <Switch label="Show helper text" checked={helperText} onChange={this.handleHelperTextChange}/>
        <Switch label="Show label info" checked={requiredLabel} onChange={this.handleRequiredLabelChange}/>
        <IntentSelect intent={intent} onChange={this.handleIntentChange} />
      </>
    )

    return (
      <Example options={options} {...this.props}>
        <FormGroup
          disabled={disabled}
          helperText={helperText && 'Helper text with details...'}
          inline={inline}
          intent={intent}
          label="Name"
          labelFor="text-input"
          labelInfo={requiredLabel && '(required)'}
        >
          <InputGroup id="text-input" placeholder="Placeholder text" disabled={disabled} intent={intent}/>
        </FormGroup>

        <FormGroup
          disabled={disabled}
          helperText={helperText && 'Helper text with details...'}
          inline={inline}
          intent={intent}
          label="Mail"
          labelFor="text-input"
          labelInfo={requiredLabel && '(required)'}
        >
          <InputGroup id="text-input" placeholder="Placeholder text" disabled={disabled} intent={intent}/>
        </FormGroup>

        <FormGroup
          disabled={disabled}
          helperText={helperText && 'Helper text with details...'}
          inline={inline}
          intent={intent}
          label="Additional info"
          labelFor="text-input"
          labelInfo={requiredLabel && '(required)'}
        >
          <Switch id="text-input" label="Pay with Bitcoin?" disabled={disabled}/>
          <Switch id="text-input" label="Are you ready?" disabled={disabled}/>
        </FormGroup>
      </Example>
    )
  }
}