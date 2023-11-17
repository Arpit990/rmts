import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// Apollo
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';

const uri = 'https://rmts-api-bhautik96016.cloud.okteto.net/graphql';

function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  return {
    link: httpLink.create({ uri }),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  exports: [
    ApolloModule, 
    HttpClientModule
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class GraphqlModule { }
