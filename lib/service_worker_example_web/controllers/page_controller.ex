defmodule ServiceWorkerExampleWeb.PageController do
  use ServiceWorkerExampleWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
