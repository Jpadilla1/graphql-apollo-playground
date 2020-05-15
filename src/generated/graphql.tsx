import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type Comment = {
   __typename?: 'Comment';
  id: Scalars['String'];
  message: Scalars['String'];
  date?: Maybe<Scalars['Date']>;
};

export type Professor = {
   __typename?: 'Professor';
  averageRating?: Maybe<Scalars['Float']>;
  avgAmountOfWork?: Maybe<Scalars['Float']>;
  avgDifficulty?: Maybe<Scalars['Float']>;
  avgPersonality?: Maybe<Scalars['Float']>;
  avgResponsibility?: Maybe<Scalars['Float']>;
  college: Scalars['String'];
  comments?: Maybe<Array<Maybe<Comment>>>;
  department: Scalars['String'];
  gender: Gender;
  id: Scalars['String'];
  name: Scalars['String'];
};

export type CreateCommentInput = {
  professorId: Scalars['String'];
  message: Scalars['String'];
};

export type Mutation = {
   __typename?: 'Mutation';
  createComment?: Maybe<Comment>;
  createProfessor?: Maybe<Professor>;
  createRating?: Maybe<Rating>;
};


export type MutationCreateCommentArgs = {
  params: CreateCommentInput;
};


export type MutationCreateProfessorArgs = {
  params: CreateProfessorInput;
};


export type MutationCreateRatingArgs = {
  params: CreateRatingInput;
};


export enum Gender {
  Male = 'male',
  Female = 'female'
}

export type CreateProfessorInput = {
  name: Scalars['String'];
  college: Scalars['String'];
  department: Scalars['String'];
  gender: Gender;
};

export type Query = {
   __typename?: 'Query';
  searchProfessors?: Maybe<Array<Maybe<Professor>>>;
  professors?: Maybe<Array<Maybe<Professor>>>;
};


export type QuerySearchProfessorsArgs = {
  name: Scalars['String'];
};

export type Rating = {
   __typename?: 'Rating';
  id: Scalars['String'];
  responsibility: Scalars['Int'];
  amountOfWork: Scalars['Int'];
  personality: Scalars['Int'];
  difficulty: Scalars['Int'];
  date: Scalars['Date'];
};

export type CreateRatingInput = {
  professorId: Scalars['String'];
  responsibility: Scalars['Int'];
  amountOfWork: Scalars['Int'];
  personality: Scalars['Int'];
  difficulty: Scalars['Int'];
};

export type AddCommentMutationVariables = {
  params: CreateCommentInput;
};


export type AddCommentMutation = (
  { __typename?: 'Mutation' }
  & { createComment?: Maybe<(
    { __typename?: 'Comment' }
    & Pick<Comment, 'id' | 'message' | 'date'>
  )> }
);

export type AddRatingMutationVariables = {
  params: CreateRatingInput;
};


export type AddRatingMutation = (
  { __typename?: 'Mutation' }
  & { createRating?: Maybe<(
    { __typename?: 'Rating' }
    & Pick<Rating, 'id'>
  )> }
);

export type RegisterProfessorMutationVariables = {
  params: CreateProfessorInput;
};


export type RegisterProfessorMutation = (
  { __typename?: 'Mutation' }
  & { createProfessor?: Maybe<(
    { __typename?: 'Professor' }
    & Pick<Professor, 'id' | 'name' | 'college' | 'department' | 'gender' | 'averageRating' | 'avgResponsibility' | 'avgAmountOfWork' | 'avgPersonality' | 'avgDifficulty'>
    & { comments?: Maybe<Array<Maybe<(
      { __typename?: 'Comment' }
      & Pick<Comment, 'id' | 'message'>
    )>>> }
  )> }
);

export type SearchProfessorsQueryVariables = {
  name: Scalars['String'];
};


export type SearchProfessorsQuery = (
  { __typename?: 'Query' }
  & { professors?: Maybe<Array<Maybe<(
    { __typename?: 'Professor' }
    & Pick<Professor, 'id' | 'name' | 'college' | 'department' | 'gender' | 'averageRating' | 'avgResponsibility' | 'avgAmountOfWork' | 'avgPersonality' | 'avgDifficulty'>
    & { comments?: Maybe<Array<Maybe<(
      { __typename?: 'Comment' }
      & Pick<Comment, 'id' | 'message'>
    )>>> }
  )>>> }
);

export type GetAllProfessorsQueryVariables = {};


export type GetAllProfessorsQuery = (
  { __typename?: 'Query' }
  & { professors?: Maybe<Array<Maybe<(
    { __typename?: 'Professor' }
    & Pick<Professor, 'id' | 'name' | 'college' | 'department' | 'gender' | 'averageRating' | 'avgResponsibility' | 'avgAmountOfWork' | 'avgPersonality' | 'avgDifficulty'>
    & { comments?: Maybe<Array<Maybe<(
      { __typename?: 'Comment' }
      & Pick<Comment, 'id' | 'message' | 'date'>
    )>>> }
  )>>> }
);



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type isTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  String: ResolverTypeWrapper<Scalars['String']>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  Comment: ResolverTypeWrapper<Comment>,
  Professor: ResolverTypeWrapper<Professor>,
  Float: ResolverTypeWrapper<Scalars['Float']>,
  CreateCommentInput: CreateCommentInput,
  Mutation: ResolverTypeWrapper<{}>,
  Date: ResolverTypeWrapper<Scalars['Date']>,
  Gender: Gender,
  CreateProfessorInput: CreateProfessorInput,
  Query: ResolverTypeWrapper<{}>,
  Rating: ResolverTypeWrapper<Rating>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  CreateRatingInput: CreateRatingInput,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  String: Scalars['String'],
  Boolean: Scalars['Boolean'],
  Comment: Comment,
  Professor: Professor,
  Float: Scalars['Float'],
  CreateCommentInput: CreateCommentInput,
  Mutation: {},
  Date: Scalars['Date'],
  Gender: Gender,
  CreateProfessorInput: CreateProfessorInput,
  Query: {},
  Rating: Rating,
  Int: Scalars['Int'],
  CreateRatingInput: CreateRatingInput,
};

export type CommentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type ProfessorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Professor'] = ResolversParentTypes['Professor']> = {
  averageRating?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  avgAmountOfWork?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  avgDifficulty?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  avgPersonality?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  avgResponsibility?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  college?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  comments?: Resolver<Maybe<Array<Maybe<ResolversTypes['Comment']>>>, ParentType, ContextType>,
  department?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  gender?: Resolver<ResolversTypes['Gender'], ParentType, ContextType>,
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createComment?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType, RequireFields<MutationCreateCommentArgs, 'params'>>,
  createProfessor?: Resolver<Maybe<ResolversTypes['Professor']>, ParentType, ContextType, RequireFields<MutationCreateProfessorArgs, 'params'>>,
  createRating?: Resolver<Maybe<ResolversTypes['Rating']>, ParentType, ContextType, RequireFields<MutationCreateRatingArgs, 'params'>>,
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date'
}

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  searchProfessors?: Resolver<Maybe<Array<Maybe<ResolversTypes['Professor']>>>, ParentType, ContextType, RequireFields<QuerySearchProfessorsArgs, 'name'>>,
  professors?: Resolver<Maybe<Array<Maybe<ResolversTypes['Professor']>>>, ParentType, ContextType>,
};

export type RatingResolvers<ContextType = any, ParentType extends ResolversParentTypes['Rating'] = ResolversParentTypes['Rating']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  responsibility?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  amountOfWork?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  personality?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  difficulty?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  date?: Resolver<ResolversTypes['Date'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type Resolvers<ContextType = any> = {
  Comment?: CommentResolvers<ContextType>,
  Professor?: ProfessorResolvers<ContextType>,
  Mutation?: MutationResolvers<ContextType>,
  Date?: GraphQLScalarType,
  Query?: QueryResolvers<ContextType>,
  Rating?: RatingResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;


export const AddCommentDocument = gql`
    mutation AddComment($params: CreateCommentInput!) {
  createComment(params: $params) {
    id
    message
    date
  }
}
    `;
export type AddCommentMutationFn = ApolloReactCommon.MutationFunction<AddCommentMutation, AddCommentMutationVariables>;

/**
 * __useAddCommentMutation__
 *
 * To run a mutation, you first call `useAddCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCommentMutation, { data, loading, error }] = useAddCommentMutation({
 *   variables: {
 *      params: // value for 'params'
 *   },
 * });
 */
export function useAddCommentMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddCommentMutation, AddCommentMutationVariables>) {
        return ApolloReactHooks.useMutation<AddCommentMutation, AddCommentMutationVariables>(AddCommentDocument, baseOptions);
      }
export type AddCommentMutationHookResult = ReturnType<typeof useAddCommentMutation>;
export type AddCommentMutationResult = ApolloReactCommon.MutationResult<AddCommentMutation>;
export type AddCommentMutationOptions = ApolloReactCommon.BaseMutationOptions<AddCommentMutation, AddCommentMutationVariables>;
export const AddRatingDocument = gql`
    mutation AddRating($params: CreateRatingInput!) {
  createRating(params: $params) {
    id
  }
}
    `;
export type AddRatingMutationFn = ApolloReactCommon.MutationFunction<AddRatingMutation, AddRatingMutationVariables>;

/**
 * __useAddRatingMutation__
 *
 * To run a mutation, you first call `useAddRatingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddRatingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addRatingMutation, { data, loading, error }] = useAddRatingMutation({
 *   variables: {
 *      params: // value for 'params'
 *   },
 * });
 */
export function useAddRatingMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddRatingMutation, AddRatingMutationVariables>) {
        return ApolloReactHooks.useMutation<AddRatingMutation, AddRatingMutationVariables>(AddRatingDocument, baseOptions);
      }
export type AddRatingMutationHookResult = ReturnType<typeof useAddRatingMutation>;
export type AddRatingMutationResult = ApolloReactCommon.MutationResult<AddRatingMutation>;
export type AddRatingMutationOptions = ApolloReactCommon.BaseMutationOptions<AddRatingMutation, AddRatingMutationVariables>;
export const RegisterProfessorDocument = gql`
    mutation RegisterProfessor($params: CreateProfessorInput!) {
  createProfessor(params: $params) {
    id
    name
    college
    department
    gender
    comments {
      id
      message
    }
    averageRating
    avgResponsibility
    avgAmountOfWork
    avgPersonality
    avgDifficulty
  }
}
    `;
export type RegisterProfessorMutationFn = ApolloReactCommon.MutationFunction<RegisterProfessorMutation, RegisterProfessorMutationVariables>;

/**
 * __useRegisterProfessorMutation__
 *
 * To run a mutation, you first call `useRegisterProfessorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterProfessorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerProfessorMutation, { data, loading, error }] = useRegisterProfessorMutation({
 *   variables: {
 *      params: // value for 'params'
 *   },
 * });
 */
export function useRegisterProfessorMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RegisterProfessorMutation, RegisterProfessorMutationVariables>) {
        return ApolloReactHooks.useMutation<RegisterProfessorMutation, RegisterProfessorMutationVariables>(RegisterProfessorDocument, baseOptions);
      }
export type RegisterProfessorMutationHookResult = ReturnType<typeof useRegisterProfessorMutation>;
export type RegisterProfessorMutationResult = ApolloReactCommon.MutationResult<RegisterProfessorMutation>;
export type RegisterProfessorMutationOptions = ApolloReactCommon.BaseMutationOptions<RegisterProfessorMutation, RegisterProfessorMutationVariables>;
export const SearchProfessorsDocument = gql`
    query SearchProfessors($name: String!) {
  professors {
    id
    name
    college
    department
    gender
    comments {
      id
      message
    }
    averageRating
    avgResponsibility
    avgAmountOfWork
    avgPersonality
    avgDifficulty
  }
}
    `;

/**
 * __useSearchProfessorsQuery__
 *
 * To run a query within a React component, call `useSearchProfessorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchProfessorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchProfessorsQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useSearchProfessorsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SearchProfessorsQuery, SearchProfessorsQueryVariables>) {
        return ApolloReactHooks.useQuery<SearchProfessorsQuery, SearchProfessorsQueryVariables>(SearchProfessorsDocument, baseOptions);
      }
export function useSearchProfessorsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SearchProfessorsQuery, SearchProfessorsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SearchProfessorsQuery, SearchProfessorsQueryVariables>(SearchProfessorsDocument, baseOptions);
        }
export type SearchProfessorsQueryHookResult = ReturnType<typeof useSearchProfessorsQuery>;
export type SearchProfessorsLazyQueryHookResult = ReturnType<typeof useSearchProfessorsLazyQuery>;
export type SearchProfessorsQueryResult = ApolloReactCommon.QueryResult<SearchProfessorsQuery, SearchProfessorsQueryVariables>;
export const GetAllProfessorsDocument = gql`
    query GetAllProfessors {
  professors {
    id
    name
    college
    department
    gender
    comments {
      id
      message
      date
    }
    averageRating
    avgResponsibility
    avgAmountOfWork
    avgPersonality
    avgDifficulty
  }
}
    `;

/**
 * __useGetAllProfessorsQuery__
 *
 * To run a query within a React component, call `useGetAllProfessorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllProfessorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllProfessorsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllProfessorsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAllProfessorsQuery, GetAllProfessorsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetAllProfessorsQuery, GetAllProfessorsQueryVariables>(GetAllProfessorsDocument, baseOptions);
      }
export function useGetAllProfessorsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAllProfessorsQuery, GetAllProfessorsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetAllProfessorsQuery, GetAllProfessorsQueryVariables>(GetAllProfessorsDocument, baseOptions);
        }
export type GetAllProfessorsQueryHookResult = ReturnType<typeof useGetAllProfessorsQuery>;
export type GetAllProfessorsLazyQueryHookResult = ReturnType<typeof useGetAllProfessorsLazyQuery>;
export type GetAllProfessorsQueryResult = ApolloReactCommon.QueryResult<GetAllProfessorsQuery, GetAllProfessorsQueryVariables>;