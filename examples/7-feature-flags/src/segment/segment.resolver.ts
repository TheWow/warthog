import { GraphQLResolveInfo } from 'graphql';
import { Arg, Args, Ctx, FieldResolver, Mutation, Query, Resolver, Root } from 'type-graphql';
import { Inject } from 'typedi';

import { BaseContext, StandardDeleteResponse } from '../../../../src';
import {
  SegmentCreateInput,
  SegmentUpdateArgs,
  SegmentWhereArgs,
  SegmentWhereInput,
  SegmentWhereUniqueInput
} from '../../generated';

import { Environment } from '../environment/environment.model';
import { FeatureFlagSegment } from '../feature-flag-segment/feature-flag-segment.model';
import { Project } from '../project/project.model';
import { UserSegment } from '../user-segment/user-segment.model';

import { Segment } from './segment.model';
import { SegmentService } from './segment.service';

@Resolver(Segment)
export class SegmentResolver {
  constructor(@Inject('SegmentService') readonly service: SegmentService) {
    // no-empty
  }

  @FieldResolver(returns => [UserSegment])
  userSegments(@Root() segment: Segment, @Ctx() ctx: BaseContext): Promise<UserSegment[]> {
    return ctx.dataLoader.loaders.Segment.userSegments.load(segment);
  }

  @FieldResolver(returns => [FeatureFlagSegment])
  featureFlagSegments(@Root() segment: Segment, @Ctx() ctx: BaseContext): Promise<FeatureFlagSegment[]> {
    return ctx.dataLoader.loaders.Segment.featureFlagSegments.load(segment);
  }

  @FieldResolver(returns => Environment)
  environment(@Root() segment: Segment, @Ctx() ctx: BaseContext): Promise<Environment> {
    return ctx.dataLoader.loaders.Segment.environment.load(segment);
  }

  @FieldResolver(returns => Project)
  project(@Root() segment: Segment, @Ctx() ctx: BaseContext): Promise<Project> {
    return ctx.dataLoader.loaders.Segment.project.load(segment);
  }

  @Query(returns => [Segment])
  async segments(
    @Args() { where, orderBy, limit, offset }: SegmentWhereArgs,
    @Ctx() ctx: BaseContext,
    info: GraphQLResolveInfo
  ): Promise<Segment[]> {
    return this.service.find<SegmentWhereInput>(where, orderBy, limit, offset);
  }

  @Query(returns => Segment)
  async segment(@Arg('where') where: SegmentWhereUniqueInput): Promise<Segment> {
    return this.service.findOne<SegmentWhereUniqueInput>(where);
  }

  @Mutation(returns => Segment)
  async createSegment(@Arg('data') data: SegmentCreateInput, @Ctx() ctx: BaseContext): Promise<Segment> {
    return this.service.create(data, ctx.user.id);
  }

  @Mutation(returns => Segment)
  async updateSegment(@Args() { data, where }: SegmentUpdateArgs, @Ctx() ctx: BaseContext): Promise<Segment> {
    return this.service.update(data, where, ctx.user.id);
  }

  @Mutation(returns => StandardDeleteResponse)
  async deleteSegment(
    @Arg('where') where: SegmentWhereUniqueInput,
    @Ctx() ctx: BaseContext
  ): Promise<StandardDeleteResponse> {
    return this.service.delete(where, ctx.user.id);
  }
}