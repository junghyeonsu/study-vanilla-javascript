import Nodes from './components/Nodes.js';
import Breadcrumb from './components/Breadcrumb.js';
import ImageView from './components/ImageView.js';
import Loading from './components/Loading.js';
import { getNodesFromServer } from './api/index.js';

const cache = {};

function App($app) {
  this.state = {
    isRoot: false,
    isLoading: false,
    nodes: [],
    depth: [],
    selectedFilePath: null,
  };

  const loading = new Loading({
    $app,
    initialState: this.state.isLoading,
  });

  const imageView = new ImageView({
    $app,
    initialState: this.state.selectedFilePath,
  });

  const breadcrumb = new Breadcrumb({
    $app,
    initialState: this.state.depth,
    onClick: index => {
      if (index === null) {
        this.setState({
          ...this.state,
          depth: [],
          nodes: cache.root,
        });
        return;
      }

      if (index === this.state.depth.length - 1) return;

      const nextState = { ...this.state };
      const nextDepth = this.state.depth.slice(0, index + 1);

      this.setState({
        ...nextState,
        depth: nextDepth,
        nodes: cache[nextDepth[nextDepth.length - 1].id],
      });
    },
  });

  const nodes = new Nodes({
    $app,
    initialState: { isRoot: this.state.isRoot, nodes: this.state.nodes },
    onClick: async node => {
      try {
        this.setState({
          ...this.state,
          isLoading: true,
          selectedFilePath: null,
        });

        if (node.type === 'DIRECTORY') {
          if (cache[node.id]) {
            this.setState({
              ...this.state,
              depth: [...this.state.depth, node],
              nodes: cache[node.id],
            });
          } else {
            const nextNodes = await getNodesFromServer(node.id);
            this.setState({
              ...this.state,
              depth: [...this.state.depth, node],
              nodes: nextNodes,
              isRoot: false,
            });
            cache[node.id] = nextNodes;
          }
        } else if (node.type === 'FILE') {
          this.setState({
            ...this.state,
            selectedFilePath: node.filePath,
          });
        }
      } catch (error) {
        console.log(`데이터를 불러오는데 에러가 발생했습니다. ${error.message}`);
      } finally {
        this.setState({
          ...this.state,
          isLoading: false,
        });
      }
    },
    onBackClick: () => {
      const nextState = { ...this.state };
      nextState.depth.pop();

      const prevNodeId =
        nextState.depth.length === 0 ? null : nextState.depth[nextState.depth.length - 1].id;

      this.setState({
        ...this.state,
        isLoading: true,
        selectedFilePath: null,
      });

      if (prevNodeId === null) {
        this.setState({
          ...nextState,
          isRoot: true,
          nodes: cache.root,
        });
      } else {
        this.setState({
          ...nextState,
          isRoot: false,
          nodes: cache[prevNodeId],
        });
      }
    },
  });

  this.setState = nextState => {
    this.state = nextState;
    loading.setState(this.state.isLoading);
    imageView.setState(this.state.selectedFilePath);
    breadcrumb.setState(this.state.depth);
    nodes.setState({
      isRoot: this.state.isRoot,
      nodes: this.state.nodes,
    });
  };

  this.init = async () => {
    try {
      this.setState({
        ...this.state,
        isLoading: true,
      });
      const rootNodes = await getNodesFromServer();
      this.setState({
        ...this.state,
        isRoot: true,
        nodes: rootNodes,
      });

      cache.root = rootNodes;
    } catch (error) {
      throw new Error(`데이터를 가져오는 과정에 문제가 있습니다. ${error.message}`);
    } finally {
      this.setState({
        ...this.state,
        isLoading: false,
      });
    }
  };

  this.init();
}

export default App;
