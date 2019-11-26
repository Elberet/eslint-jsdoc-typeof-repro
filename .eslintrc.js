module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 8,
    sourceType: "module"
  },
  plugins: ["jsdoc"],
  rules: {
    "valid-jsdoc": "off",
    "jsdoc/check-access": 1,
    "jsdoc/check-alignment": 1,
    // Deaktiviert: benötigt unsinnig komplizierte zusätzliche Linter-Konfiguration
    "jsdoc/check-examples": 0,
    "jsdoc/check-indentation": 1,
    "jsdoc/check-param-names": 1,
    "jsdoc/check-syntax": 1,
    "jsdoc/check-tag-names": 1,
    "jsdoc/check-types": 1,
    "jsdoc/check-values": 1,
    "jsdoc/empty-tags": 1,
    "jsdoc/implements-on-classes": 1,
    // Workaround für fehlenden Unicode-fähigen Großbuchstaben-Vergleich
    "jsdoc/match-description": [1, {
      matchDescription: "^([A-ZÄÖÜ]|[`\\d_])[\\s\\S]*[.?!`]$"
    }],
    "jsdoc/newline-after-description": 1,
    // Deaktiviert: macht nur Sinn wenn Typ-Infos als Teil des Codes
    // angegeben werden können (i.e. Typescript)
    "jsdoc/no-types": 0,
    "jsdoc/no-undefined-types": [1, {
      definedTypes: ["ReturnType"]
    }],
    // Macht Beschreibung optional wenn wenigstens Parameter, Return-Wert,
    // Exceptions oder (bei Feldern) Typ dokumentiert sind.
    "jsdoc/require-description": [1, {
      exemptedBy: ["type", "param", "returns", "throws", "private"]
    }],
    // Deaktiviert: heuristik zur Erkennung vollständiger Sätze schlägt
    // zu oft falsch an, z.B. bei Worten mit Großbuchstaben am Anfang einer
    // Zeile.
    "jsdoc/require-description-complete-sentence": 0,
    // Deaktiviert: keine Beispiele...
    "jsdoc/require-example": 0,
    "jsdoc/require-hyphen-before-param-description": 1,
    // Nur öffentliche Methoden in exportierten Klassen sowie exportierte
    // Funktionen müssen dokumentiert werden.
    "jsdoc/require-jsdoc": [1, {
      publicOnly: true,
      require: {
        MethodDefinition: true,
        FunctionDeclaration: true
      }
    }],
    "jsdoc/require-param": 1,
    "jsdoc/require-param-description": 1,
    "jsdoc/require-param-name": 1,
    "jsdoc/require-param-type": 1,
    "jsdoc/require-returns": 1,
    "jsdoc/require-returns-check": 1,
    "jsdoc/require-returns-description": 1,
    "jsdoc/require-returns-type": 1,
    // Deaktiviert: Regel versteht keine typeof-Ausdrücke
    "jsdoc/valid-types": 1
  },
  settings: {
    jsdoc: {
      mode: "typescript",
      tagNamePreference: {
        augments: "extends"
      }
    }
  }
}
