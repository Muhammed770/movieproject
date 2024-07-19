use serde_json::json;
use vercel_runtime::{run, Body, Error, Request, Response, StatusCode};

#[tokio::main]
async fn main() -> Result<(), Error> {
    run(handler).await
}

pub async fn handler(_req: Request) -> Result<Response<Body>, Error> {
    Ok(Response::builder()
        .status(StatusCode::OK)
        .header("Content-Type", "application/json")
        .header("Cache-control",format!(
                "public, max-age=0, must-revalidate, s-maxage={s_maxage}",
                s_maxage = 1 * 60 * 60
            ),)
        .body(
            json!({ "message": "crab is the best!" }).to_string()
            .into(),
        )?)
}