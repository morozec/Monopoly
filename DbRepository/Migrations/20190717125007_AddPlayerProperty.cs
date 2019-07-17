using Microsoft.EntityFrameworkCore.Migrations;

namespace DbRepository.Migrations
{
    public partial class AddPlayerProperty : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "PlayerProperty",
                columns: table => new
                {
                    PlayerId = table.Column<int>(nullable: false),
                    PropertyId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PlayerProperty", x => new { x.PlayerId, x.PropertyId });
                    table.ForeignKey(
                        name: "FK_PlayerProperty_Players_PlayerId",
                        column: x => x.PlayerId,
                        principalTable: "Players",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_PlayerProperty_Properties_PropertyId",
                        column: x => x.PropertyId,
                        principalTable: "Properties",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_PlayerProperty_PropertyId",
                table: "PlayerProperty",
                column: "PropertyId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "PlayerProperty");
        }
    }
}
