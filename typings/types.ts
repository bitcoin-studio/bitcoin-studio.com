import {StringMap, TOptions} from 'i18next'

export type i18translateType = {
  i18n: any,
  t: (key: string | TemplateStringsArray | (string | TemplateStringsArray)[], options?: string | TOptions<StringMap> | undefined) => string
}
