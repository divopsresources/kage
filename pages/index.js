/* @flow */
import * as React from "react";

import Layout from "../components/Layout";
import SignInModalContainer from "../components/SignInModalContainer";
import SignUpModalContainer from "../components/SignUpModalContainer";
import TaskAddContainer from "../components/TaskAddContainer";
import TaskCountContainer from "../components/TaskCountContainer";
import TaskFilterContainer from "../components/TaskFilterContainer";
import TaskListContainer from "../components/TaskListContainer";
import TaskSorterContainer from "../components/TaskSorterContainer";
import { FlexRow } from "../components/common";
import appEnhancer from "../lib/appEnhancer";

const DEFAULT_QUERY = {
  sort: "updatedAt:desc",
  status: "all",
  tag: "all",
};

type Props = {|
  url: {
    query: Object,
  },
|};

class TaskListPage extends React.Component<Props> {
  render() {
    const query = { ...DEFAULT_QUERY, ...this.props.url.query };

    return (
      <Layout isIndex={true}>
        <SignInModalContainer />
        <SignUpModalContainer />
        <TaskAddContainer />
        <TaskFilterContainer query={query} />
        <FlexRow between vbottom mb={5}>
          <TaskCountContainer query={query} />
          <TaskSorterContainer query={query} />
        </FlexRow>
        <TaskListContainer query={query} />
      </Layout>
    );
  }
}

export default appEnhancer(TaskListPage);
