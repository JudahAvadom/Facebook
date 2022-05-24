module.exports = {
    root: true,
    overrides: [
        {
            files: ['*.ts'],
            parser: "@typescript-eslint/parser",
            plugins: [
                "@typescript-eslint"
            ],
            extends: [
                "eslint:recommended",
                "plugin:@typescript-eslint/eslint-recommended",
                "plugin:@typescript-eslint/recommended"
            ]
        },
        {
            files: ['*.graphql'],
            parser: '@graphql-eslint/eslint-plugin',
            plugins: ['@graphql-eslint'],
            parserOptions: {
                operations: ['query.graphql', 'fragment.graphql', 'fragment2.graphql'],
                schema: 'schema.graphql',
            },
            rules: {
                '@graphql-eslint/require-id-when-available': ['error', { fieldName: '_id' }],
                '@graphql-eslint/unique-fragment-name': 'error',
                '@graphql-eslint/no-anonymous-operations': 'error',
                '@graphql-eslint/naming-convention': [
                    'error',
                    {
                        OperationDefinition: {
                            style: 'PascalCase',
                            forbiddenPrefixes: ['Query', 'Mutation', 'Subscription', 'Get'],
                            forbiddenSuffixes: ['Query', 'Mutation', 'Subscription'],
                        },
                    },
                ],
                '@graphql-eslint/no-case-insensitive-enum-values-duplicates': ['error'],
                '@graphql-eslint/require-description': ['error', { FieldDefinition: true }],
            },
        },
    ],
};